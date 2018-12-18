import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class SimpleCodeSould {

    @Test
    void return42() {
        assertThat(SimpleCode.get42()).isEqualTo(42);
    }

}
