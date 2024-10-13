class Group {
    #contents;

    constructor() {
        this.members = [];
    }

    has(value) {
        return this.members.includes(value);
    }

    add(value) {
        if (!this.has(value)) {
          this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(member => member !== value);
    }

    static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
          group.add(value);
        }
        return group;
    }
}

function main() {
    let group = Group.from([10, 20]);
    console.log(group.has(10));
    // → true
    console.log(group.has(30));
    // → false
    group.add(10);
    group.delete(10);
    console.log(group.has(10));
    // → false
}

if (require.main === module) {
    main();
}

module.exports = Group;