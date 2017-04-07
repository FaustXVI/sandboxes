-module(specs).
-include_lib("eunit/include/eunit.hrl").

get42() -> 42.

should_return_42__test() ->
    ?assertEqual(42, get42()).
