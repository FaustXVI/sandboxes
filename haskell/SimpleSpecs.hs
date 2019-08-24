import Test.Hspec;
import Test.QuickCheck;

main = hspec $ do
    describe "a simple test" $ do
        it "should work" $ do
            2 + 2 `shouldBe` 4
        it "should be associative" $ do
            let f = (\x y -> x + y == y + x) :: Int -> Int -> Bool
            property f
        it "should validate property" $ do
            let f = (\n -> even n ==> odd (n+1)) :: Int -> Property
            property f
        it "should validate property" $ do
            let f = (\n -> n > 0 && n < 12 ==> n + 1 > 0 && n <= 12) :: Int -> Property
            property f
