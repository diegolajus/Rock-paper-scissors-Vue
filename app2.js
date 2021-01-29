const app = Vue.createApp({
    data() {
        return {
            score:0,
            result:"",
            numberOfGames:6,
            computerOptions:["paper","rock","scissors"],
            showMainOptions:true,
            userSelects:"",
            computerSelects:"",
            showReadyToPlay:true,
            showChoices:false,
            showNumberOfAttempts:false,
            result:"",
            showResult:false,
            
            //Player options
            showPaper:false,
            showRock:false,
            showScissors:false,
            
            //Computer options
            showPaperComputer:false,
            showScissorsComputer:false,
            showRockComputer:false,
            showPlayAgain:false,
            show : false


        }
    },
    mounted() {
        this.show = true
    },
    methods: {
        playerSelect(event){
            if(event.target.id=="rock" || event.target.alt=="rock"){
                this.showRock=true
                this.userSelects="Rock"
                console.log(event.target)
            }else if(event.target.id=="paper" || event.target.alt=="paper"){
                this.showPaper=true
                this.userSelects="Paper"
            }
            else {
                this.showScissors=true
                this.userSelects="Scissors"
            }
            
            this.numberOfGames--
            this.getRandomValueFromArray()
            this.showMainOptions=false
            this.updateScore()
            this.showPlayAgain=true
            this.showReadyToPlay=false
            this.showChoices=true
            this.showNumberOfAttempts=false,
            this.showResult=true
        
        },
        getRandomValueFromArray() {
            let numElements = this.computerOptions.length
            let randomIndex = Math.floor(Math.random() * numElements)
            console.log("Computer choose: ",this.computerOptions[randomIndex])
            if(this.computerOptions[randomIndex]=="rock"){
                this.showRockComputer=true
                this.computerSelects="Rock"
            }else if(this.computerOptions[randomIndex]=="paper"){
                this.showPaperComputer=true
                this.computerSelects="Paper"
            }
            else{
                this.showScissorsComputer=true
                this.computerSelects="Scissors"
            }
        },
        updateScore(){
            if(this.showPaper && this.showScissorsComputer ){
                this.score--
                this.result="You lose"
                
            }else if (this.showPaper && this.showRockComputer ){
                this.score++
                this.result="You win"
            }
            else if (this.showRock && this.showPaperComputer ){
                this.score--
                this.result="You lose"
            }
            else if (this.showRock && this.showScissorsComputer ){
                this.score++
                this.result="You win"
            }
            else if (this.showScissors && this.showPaperComputer ){
                this.score++
                this.result="You win"
            }
            else if (this.showScissors && this.showRockComputer ){
                this.score--
                this.result="You lose"
            }
            else{
                this.result="Tie in the game"
            }
        },
        playAgain(){
            this.showMainOptions=true
            this.showPaper=false
            this.showRock=false
            this.showScissors=false
            this.showPaperComputer=false
            this.showScissorsComputer=false
            this.showRockComputer=false
            this.showPlayAgain=false
            this.userSelects=""
            this.computerSelects=""
            this.showChoices=false
            this.showNumberOfAttempts=true
            this.result=""

        }
    },
    watch: {
        numberOfGames(value){
            if(value==0){
                console.log("ya no puedes jugar más")
                setTimeout(function() {
                    location.reload();
                }, 3000);


            }
        },

    }
})

app.mount('#app')