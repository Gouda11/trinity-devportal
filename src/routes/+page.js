export const load = ({ fetch }) => {
    const fetchTaluk = async() => {
        const res = await fetch('/api/taluk');
        const data = await res.json();
        return data;
    }
    return {
        taluk: fetchTaluk()
    }
}