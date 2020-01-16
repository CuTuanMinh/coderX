// Tham chiếu đến hàm xây dựng của class cha với super 

class Hero {
	constructor(name, hp, damage) {
		this.name = name;
		this.hp = hp;
		this.damage = damage;
	}

	applyDamage(damage) {
		this.hp -= damage;
	}

	attack(enemy) {
		enemy.applyDamage(this.damage);
	}
}

class RangedHero extends Hero { 
	// RangedHero -> subclass -> class con
	// Hero -> baseclass
	constructor(name, hp, damage, range) {
		super(name, hp, damage); // gọi lại khai báo từ baseclass
		this.range = range;
	}

	attack(enemy) {
		super.attack(enemy);// Gọi lại những gì đã viết trong func cùng tên ở baseclass
		this.hp += this.damage;
	}
}

const batman = new RangedHero('Batman', 100, 10);
const joker = new('Joker', 200, 5);

console.log({ batman, joker});
// ~ { batman: batman, joker: joker} enhance obj literals

batman.attack(joker);
console.log({ batman, joker});