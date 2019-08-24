package fizzBuzz;

import fizzBuzz.FizzBuzz;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static java.lang.String.valueOf;
import static org.assertj.core.api.Assertions.assertThat;

public class FizzBuzzShould {

    @ParameterizedTest
    @ValueSource(ints = {3, 6, 9, 12, 369})
    void shouldFizz(int n) {
        assertThat(FizzBuzz.fizzBuzz(n)).isEqualTo("Fizz");
    }

    @ParameterizedTest
    @ValueSource(ints = {5, 10, 20})
    void shouldBuzz(int n) {
        assertThat(FizzBuzz.fizzBuzz(n)).isEqualTo("Buzz");
    }

    @ParameterizedTest
    @ValueSource(ints = {15, 30, 45})
    void shouldFizzBuzz(int n) {
        assertThat(FizzBuzz.fizzBuzz(n)).isEqualTo("FizzBuzz");
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 2, 4})
    void shouldEcho(int n) {
        assertThat(FizzBuzz.fizzBuzz(n)).isEqualTo(valueOf(n));
    }

}
