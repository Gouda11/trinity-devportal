// @ts-ignore
export const load = ({ fetch }) => {
    const fetchTaluk = async() => {
        const res = await fetch('/api/taluk');
        const data = await res.json();
        console.log(data.length)
        const resultData = {
            resultlength: data.length,
            data: data,
            status: 200,
        }
        return resultData;
    }
    return {
        taluk: fetchTaluk(),
    }
}