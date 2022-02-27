import platziMusicService from "@/services/platzi-music";

const trackService = {}

trackService.search = function (q, offset = 0) {
    const type = 'track'

    return platziMusicService.get('/search', {
        params: { q, type, offset }
    })
        .then(res => res.data)
}

trackService.getById = (id) => {
    return platziMusicService.get(`/tracks/${id}`)
        .then(res => res.data)
}

export default trackService