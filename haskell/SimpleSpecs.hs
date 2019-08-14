import Test.Hspec;
import Test.QuickCheck;

main = hspec $ do
    describe "a simple test" $ do
        it "should work" $ do
            2 + 2 `shouldBe` 4
        it "should be associative" $ do
            let f = (\x y -> x + y == y + x) :: Int -> Int -> Bool
            property f

