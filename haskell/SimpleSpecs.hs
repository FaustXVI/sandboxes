import Test.Hspec;

main = hspec $ do
    describe "a simple test" $ do
        it "should work" $ do
            2 + 2 `shouldBe` 4
