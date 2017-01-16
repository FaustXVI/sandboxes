package sandbox

import io.kotlintest.specs.FreeSpec

class SimpleSpec : FreeSpec() {
    init {
        "A simple spec" - {
            "should work" {
                get42() shouldBe 42
            }
        }
    }

}