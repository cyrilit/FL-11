class Fighter {
	constructor(params) {
		const damageDefault = 10;
		const HPdefault = 100;
		const maxAgility = 100;
		
		this.name = params.name;
		this.damage = params.damage || damageDefault;
		this.hp = params.hp || HPdefault;
		this.agility = params.agility > maxAgility ? maxAgility : params.agility;
		this.wins = 0;
		this.losses = 0;
		this.totalHP = this.hp;
	}

	get getName() {
		return this.name;
	}

	get getDamage() {
		return this.damage;
	}

	get getAgility() {
		return this.agility;
	}

	get getHealth() {
		return this.hp;
	}

	attack(antagonist) {
		const maximumPercent = 100;
		let attackProbability = (maximumPercent - antagonist.getAgility) / maximumPercent;
		let attack = Math.random();
		if (attack < attackProbability) {
			antagonist.dealDamage(this.damage);
			console.log(`${this.name} makes ${this.damage} to ${antagonist.name}.`);
		} else {
			console.log(`${this.name} attack missed!`);
		}
	}

	logCombatHistory() {
		console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses}.`);
	}

	heal(hp) {
		this.hp += hp;
		if (this.hp > this.totalHP) {
			this.hp = this.totalHP;
		}
	}

	dealDamage(hp) {
		this.hp -= hp;
		if (this.hp < 0) {
			this.hp = 0;
		}
	}

	addWin() {
		this.wins++;
	}

	addLoss() {
		this.losses++;
	}
}

function battle(fighter1st, fighter2nd) {
	if (fighter1st.getHealth === 0) {
		console.log(`${fighter1st.getName} is dead and can't fight`);
	} else if (fighter2nd.getHealth === 0) {
		console.log(`${fighter2nd.getName} is dead and can't fight`);
	} else {
		while (fighter1st.getHealth > 0 && fighter2nd.getHealth > 0) {
			fighter1st.attack(fighter2nd);
			if (fighter2nd.getHealth > 0) {
				fighter2nd.attack(fighter1st);
				if (fighter1st.getHealth === 0) {
					fighter2nd.addWin();
					fighter1st.addLoss();
				}
			} else {
				fighter1st.addWin();
				fighter2nd.addLoss();
			}
		}
		fighter1st.logCombatHistory();
		fighter2nd.logCombatHistory();
	}
}

const fighter1 = new Fighter({
	name: 'Sam',
	damage: 20,
	agility: 25,
	hp: 100
});

const fighter2 = new Fighter({
	name: 'Jim',
	damage: 20,
	agility: 40,
	hp: 100
});
