//* JSON types
/*
A JSON value MUST be an
  · object
  · array
  · number
  · string,
or one of the following three literal names:
  · false
  · true
  · null
*/

type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONArray | JSONObject | JSONPrimitive

//! DO NOT EDIT ANY CODE BELOW THIS LINE
function isJSON(arg: JSONValue) {}

//✔️ POSITIVE test cases (must pass)
isJSON('hello') //✔️ Strings
isJSON([4, 8, 15, 16, 23, 42]) //✔️ Arrays of numbers
isJSON({ greeting: 'hello' }) //✔️ Objects
isJSON(false) //✔️ Boolean values
isJSON(true)
isJSON(null) //✔️ null values
isJSON({ a: { b: [2, 3, 'foo', null, false] } }) //✔️ A complex object

//! NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => '') //! Functions are not valid JSON
// @ts-expect-error
isJSON(class {}) //! Classes are not valid JSON
// // @ts-expect-error
isJSON(undefined) //! undefined is not valid JSON
//// @ts-expect-error
// isJSON(BigInt(143)) //! BigInts are not valid JSON
