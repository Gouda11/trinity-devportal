export const load = () => {
    const fetchTaluk = async({ fetch }) => {
        const res = await fetch('/api/taluk');
        console.log(res)
        const data = await res.json();
        console.log('data', data)
        return data.taluks;
    }
    return {
        taluk: fetchTaluk
    }
}