async function DoSelectOrder1(data) {
    try {
        const response = await axios.post('../../server/index.php?action=DoSelect', Qs.stringify(data));
        const orders = response.data.result;
        let maxOid = 0;
        
        // 找到最大的 oid
        orders.forEach(order => {
            const oid = parseInt(order.oId, 10);
            if (oid > maxOid) {
                maxOid = oid;
            }
        });

        // 新的 oid 是最大的 oid 加 1
        const newOid = (maxOid + 1).toString().padStart(3, '0');
        return newOid;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export { DoSelectOrder1 };