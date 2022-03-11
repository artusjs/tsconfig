function FooDecorator() {
  return function (target: any) {
    console.log('decorator to class: ', target);
  }
}

@FooDecorator()
class Foo {

}
