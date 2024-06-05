package com.rod.test;

import static org.assertj.core.api.Assertions.assertThat;
import com.rod.test.common.config.CustomException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Signal;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FluxAndMonoTest {
    @Mock CustomException customExceptionMono;
    @Mock CustomException customExceptionFlux;

    @BeforeEach
    public void setUp() {
        customExceptionMono = new CustomException("Mono Exception");
        customExceptionFlux = new CustomException("Flux Exception");
    }

    @Test @DisplayName("Flux just() sample test")
    public void fluxJustTest() {
        List<String> names = new ArrayList<>();
        Flux<String> flux = Flux.just("Adam", "Anna", "Jack", "Jenny").log();
        flux.subscribe(names::add);
        assertThat(names).isEqualTo(Arrays.asList("Adam", "Anna", "Jack", "Jenny"));
    }

    @Test @DisplayName("Mono just() sample test")
    public void monoJustTest() {
        // Reactive streams 에서는 Data, Event, Signal 중 Signal 을 사용한다.
        // onNext, onError, onComplete 가 Signal 이다.
        List<Signal<Integer>> list = new ArrayList<>(4);
        final Integer[] result = new Integer[1];
        Mono<Integer> mono = Mono.just(1)
                .log()
                .doOnEach(k -> {
            list.add(k);
            System.out.println("Signal: " + k);
        });

        mono.subscribe(i -> result[0] = i);
        // 리스트의 사이즈는
        assertThat(list.size()).isEqualTo(2);
    }

    /**
     * Flux.create()와 배압
     * Subscriber 로부터 요청이 왔을 때(FluxSink#onRequest) 데이터를 전송하거나(pull 방식)
     * Subscriber 의 요청에 상관없이 데이터를 전송하거나(push 방식)
     * 두 방식 모두 Subscriber 가 요청한 개수보다 더 많은 데이터를 발생할 수 있다.
     * 이 코드는 Subscriber 가 요청한 개수보다 3개 데이터를 더 발생한다. 이 경우 어떻게 될까?
     * 기본적으로 Flux.create()로 생성한 Flux 는 초과로 발생한 데이터를 버퍼에 보관한다.
     * 버퍼에 보관된 데이터는 다음에 Subscriber 가 데이터를 요청할 때 전달된다.
     * 요청보다 발생한 데이터가 많을 때 선택할 수 있는 처리 방식은 다음과 같다.
     * IGNORE : Subscriber 의 요청 무시하고 발생(Subscriber 의 큐가 다 차면 IllegalStateException 발생)
     * ERROR : 익셉션(IllegalStateException) 발생
     * DROP : Subscriber 가 데이터를 받을 준비가 안 되어 있으면 데이터 발생 누락
     * LATEST : 마지막 신호만 Subscriber 에 전달
     * BUFFER : 버퍼에 저장했다가 Subscriber 요청시 전달. 버퍼 제한이 없으므로 OutOfMemoryError 발생 가능
     * Flux.create()의 두 번째 인자로 처리 방식을 전달하면 된다.
     * */

    @Test @DisplayName("Flux create() sample test")
    public void fluxCreateTest() {
        Flux<String> flux = Flux
                .generate(() -> {
                    return 0;
                    }, (state, sink) -> {
                    sink.next("3 x " + state + " = " + 3 * state);
                    if (state == 10) sink.complete();
                    return state + 1;
                });

        flux.subscribe(System.out::println);
    }
}
