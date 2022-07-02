declare module 'lodash' {
    function multiply(multiplier: number, muliplicand: number) :number

    //generic typing
    function reverse<Type>(array: Type[]) :Type[]

    function dropRight(array: (string | number)[], n: number = 1) :(string | number)[]
}
