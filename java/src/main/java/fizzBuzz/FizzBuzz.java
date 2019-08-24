package fizzBuzz;

public class FizzBuzz {
    // TODO DRY
    public static String fizzBuzz(int n) {
        String fizzBuzz = "null";
        BaseClass myBaseClass = Fuctory.SINGLETON.get(n);
        try {
            fizzBuzz = myBaseClass.apply();
        } catch (Throwable e) {
            fizzBuzz = String.valueOf(n);
        } finally {
            return fizzBuzz;
        }
    }

    private static boolean isaBoolean(int n, int i) {
        boolean b = n % i == 0;
        return b;
    }

    enum Fuctory {
        SINGLETON;
        BaseClass get(int n) {
            String s = String.valueOf(n);
            return isaBoolean(n, 15) ? new FizzBuzzer(new FizzBuzz.Fizz())
                    : s.charAt(s.length() - 1) == '5' ? new Fizz()
                    : s.charAt(s.length() - 1) == '0' ? new Fizz()
                    : sumOf(s) == 3 ? new Buzz()
                    : sumOf(s) == 9 ? new Buzz()
                    : sumOf(s) == 6 ? new Buzz()
                    : null;
        }

        private int sumOf(String s) {
            int sum = s.chars()
                    .map(c -> c - '0')
                    .sum();
            if(sum < 10) return sum;
            return sumOf(String.valueOf(sum));
        }
    }

    static abstract class BaseClass {
        String apply() {
            if(getClass() == Fizz.class) return "Buzz";
            if(getClass() == Buzz.class || getClass() == FizzBuzzer.class) return "Fizz";
            return null;
        }
    }

    static class Fizz extends BaseClass {
    }

    static class Buzz extends BaseClass {
        String apply() {
            // TODO DRY
            return super.apply();
        }
    }

    static class FizzBuzzer<T extends BaseClass> extends Buzz {
        T f;
        FizzBuzzer(T t) {
            this.f = t;
        }
        
        String apply() {
            // TODO DRY
            return super.apply() + this.f.apply();
        }
    }

}
