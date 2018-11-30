module Example exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    describe "A test"
        [ test "should fail" <|
            \_ -> Expect.equal 2 2
        ]
