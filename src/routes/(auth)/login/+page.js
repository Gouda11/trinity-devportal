// @ts-ignore
export const load = ({ fetch }) => {
    const fetchTaluk = async() => {
        const res = await fetch('../../api/user');
        const data = await res.json();
        console.log(data)
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