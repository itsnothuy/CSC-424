package assignment1

class Group[T]:
  private var members = List[T]()

  def add(value: T): Unit = {
    if (!has(value)) {
      members = value :: members
    }
  }

  def delete(value: T): Unit = {
    members = members.filterNot(_ == value)
  }

  def has(value: T): Boolean = {
    members.contains(value)
  }

object Group:
  def from[T](iterable: Iterable[T]): Group[T] = {
    val group = new Group[T]()
    for (value <- iterable) {
      group.add(value)
    }
    group
  }


@main def test() = {
  val group = Group.from(List(10, 20))
  println(group.has(10))
  // → true
  println(group.has(30))
  // → false
  group.add(10)
  group.delete(10)
  println(group.has(10))
  // → false
}