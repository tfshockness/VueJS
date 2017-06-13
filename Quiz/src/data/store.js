
export const store = {
            i: 0,
            getI: () => store.i,
            incrementI: function(){
              store.i++;
            },
            decrementI: function(){
                store.i--;
            },
            questions:[
                {
                    isMultiple: false,
                    isCorrect: false,
                    answer: 'b',
                    picked: '',
                    question: 'Vancouver is also called as?',
                    explanation: 'Vancouver is also called “Hollywood of the North”. In North America the city comes second after Los Angeles in TV production and third in feature film production (after Los Angeles and New York). Most productions made in Vancouver are American, whereas most Toronto based productions are Canadian.',
                    setCorrect(){
                        this.isCorrect = true
                    },
                    options: [
                        {
                            option: 'a',
                            text: 'Sunnycouver'
                        },
                        {
                            option: 'b',
                            text: 'Hollywood of the North'
                        },
                        {
                            option: 'c',
                            text: 'The big E'
                        },
                        {
                            option: 'd',
                            text: 'C-Town'
                        }
                    ]
                },
                {
                    isMultiple: false,
                    isCorrect: false,
                    answer: 'a',
                    picked: '',
                    question: 'How long is Kitsilano Pool in meters?',
                    explanation: 'Vancouver is home to Canada’s longest pool. Kits Pool is the city’s only saltwater pool and is located in the Kitsilano neighbourhood. The lanes stretch 137 meters, which is almost 3 times as long as an Olympic pool.',
                    options: [
                        {
                            option: 'a',
                            text: '137m'
                        },
                        {
                            option: 'b',
                            text: '1600m'
                        },
                        {
                            option: 'c',
                            text: '10m'
                        },
                        {
                            option: 'd',
                            text: '240m'
                        }
                    ]
                },
                {
                    isMultiple: false,
                    isCorrect: false,
                    answer: 'd',
                    picked: '',
                    question: 'What is the average of rain that drops in Vancouver per year?',
                    explanation: 'Vancouver has the mildest climate in Canada. Although, it receives on average, 1,589mm of rain per year.',
                    options: [
                        {
                            option: 'a',
                            text: '2,389mm'
                        },
                        {
                            option: 'b',
                            text: '400Kg'
                        },
                        {
                            option: 'c',
                            text: 'It is just too much!'
                        },
                        {
                            option: 'd',
                            text: '1,589mm'
                        }
                    ]
                },
                {
                    isMultiple: false,
                    isCorrect: false,
                    answer: 'c',
                    picked: '',
                    question: 'Which month in 2017 it rained 28 days?',
                    explanation: 'It was the "gloomiest" March in Vancouver since record-keeping began in 1951, with only 70.5 total hours of sunshine in the entire month, according to Environment Canada. It also rained 28 out of the 31 days, tying the previous record for most days with rain.',
                    options: [
                        {
                            option: 'a',
                            text: 'January'
                        },
                        {
                            option: 'b',
                            text: 'February'
                        },
                        {
                            option: 'c',
                            text: 'March'
                        },
                        {
                            option: 'd',
                            text: 'April'
                        }
                    ]
                },
                {
                    isMultiple: false,
                    isCorrect: false,
                    answer: 'b',
                    picked: '',
                    question: 'Which group was established in Vancouver?',
                    explanation: 'Greenpeace, one of the world’s oldest and most successful environmental groups was established in Vancouver.',
                    options: [
                        {
                            option: 'a',
                            text: 'Friends of the Rain'
                        },
                        {
                            option: 'b',
                            text: 'Greenpeace'
                        },
                        {
                            option: 'c',
                            text: 'Word Wide Fund for Nature'
                        },
                        {
                            option: 'd',
                            text: 'Anonymous'
                        }
                    ]
                }



            ]
}
