const skills = [
    {id: 123, skill: 'JavaScript', fluent: true},
    {id: 124, skill: 'CSS', fluent: false},
    {id: 125, skill: 'HTML', fluent: true}
]

module.exports = {
    getAll,
    getOne
}

function getAll(){
    return skills
}

function getOne(id){
    is = parseInt(id)

    return skills.find(skill => skill.id === id)
}