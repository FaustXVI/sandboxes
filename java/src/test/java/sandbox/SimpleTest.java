package sandbox;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class SimpleTest {

    @Test
    public void shouldPass() {
        Assertions.assertThat(true).isEqualTo(true);
    }
}
