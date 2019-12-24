# Objectify a URL Query String

### [Problem taken from CodeWars, created by user OverZealous](https://www.codewars.com/kata/objectify-a-url-query-string/javascript)
___

In this kata, we want to convert a URL query string into a nested object.  The query string will contain parameters that may or may not have embedded dots (`'.'`), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

```
user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
```

Your method should return an object hash-map that looks like this:

```
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
```

* You can expect valid input.  You won't see input like:
    ````
    // This will NOT happen
    foo=1&foo.bar=2
    ````
* All properties and values will be strings — and the values should be left as strings to pass the tests.
* Make sure you decode the URI components correctly
* A method has been provided for testing Objects to compare objects recursively without depending on property order:
    ````js
    assertSimilarObjects(myValue, expectedValue);
    ````
    Use it just like `Test.assertSimilar`, it will call the testing framework for you.
    