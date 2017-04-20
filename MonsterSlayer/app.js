let vm = new Vue({
    el: '#app',
    data: {
        newGame: false,
        start: true,
        playerHealth: 100,
        health: 'green',
        monsterHealth: 100,
        log: []
    },

    methods: {
        startGame() {
            this.newGame = !this.newGame;
            this.start = !this.start;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        },

        attack() {
            this.playerTurn();
            this.monsterTurn();

        },
        specialAttack() {
            let damage = this.calculateDamage(8, 16);
            this.monsterHealth -= damage;
            if (this.gameOver()) {
                return;
            };
            this.monsterTurn();
        },
        heal() {
            if (this.playerHealth >= 90) {
                let heal = 100 - this.playerHealth;
                this.playerHealth += heal;
                let log = "Player was healed by " + heal;
                this.log.unshift(log);
                this.monsterTurn();
            } else {
                this.playerHealth += 10
                let log = "Player was healed by 10";
                this.log.unshift(log);
                this.monsterTurn();
            }

        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        gameOver() {
            if (this.playerHealth <= 0) {
                alert("You LOST!");
                this.startGame();
            }
            if (this.monsterHealth <= 0) {
                alert("You WON!");
                this.startGame();
            }
        },

        playerTurn() {
            let damage = this.calculateDamage(3, 8);
            this.monsterHealth -= damage;
            let log = "Player hit monster with " + damage + " damage";
            this.log.unshift(log);
            if (this.gameOver()) {
                return;
            };
        },

        monsterTurn() {
            let damage = this.calculateDamage(3, 8);
            this.playerHealth -= damage;
            let log = "Monter hit player with " + damage + " damage";
            this.log.unshift(log);
            this.gameOver();
        }

    },

    computed: {

    },

    watch: {

    }
});