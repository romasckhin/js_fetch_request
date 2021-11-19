function requestPatch() {

    const _idPatch = '61195418fb9c65003cb57d2f'
    fetch('d/' + _idPatch, {
        method: "PATCH",
        headers: {'Content-type': 'application/json;charset=utf-8'},
        completed: true,
        body: JSON.stringify({
            description: "KUKUKU",
            priority: 5,
            status: "review",
            name: "Be",
        })
    })
        .then(res => {
            return res.json()
        })
        .then(cards => console.log(cards))
        .catch(err => console.log('Error Patch', err))

}

function requestGet() {

    fetch('hp.com/card')
        .then(res => {
            return res.json()
        })
        .then(cards => console.log(cards))
        .catch(err => console.log('Error Get', err))

}

function requestDelete() {

    const _idDelete = ''
    fetch('hcard/' + _idDelete, {
        method: 'DELETE'
    })
        .then(res => {
            return res.json()
        })
        .then(cards => console.log(cards))
        .catch(err => console.log('Error DELETE', err))

}

function requestPost() {

    fetch('http:\card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            description: "something",
            priority: 5,
            status: "review",
            name: "I",
        })
    })
        .then(res => {
            return res.json()
        })
        .then(cards => console.log(cards))
        .catch(err => console.log('Error Post', err))

}


