async function DoSelectOrder1(data) {
    try {
        const response = await axios.post('../../server/index.php?action=DoSelect', Qs.stringify(data));
        const orders = response.data.result;
       
        orders.sort((a, b) => parseInt(b.oId, 10) - parseInt(a.oId, 10));

        const newOid = (parseInt(orders[0].oId, 10) + 1).toString().padStart(3, '0');

        return newOid;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export { DoSelectOrder1 };