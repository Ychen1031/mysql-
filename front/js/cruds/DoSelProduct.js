async function DoSelectProduct(Data) {
    try {
        const response = await axios.post('../../server/index.php?action=DoSelect', Qs.stringify(Data));
        let rawData = Array.isArray(response.data.result) ? response.data.result : [];
        if (rawData.length === 0) {
            console.warn('No products found in the response.');
        }
        return groupByProductName(rawData);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// 資料分組與整合的函數
const groupByProductName = (data) => {
    let grouped = {};

    data.forEach(item => {
        // 如果該產品名稱尚未在分組中，初始化為空物件
        if (!grouped[item.pName]) {
            grouped[item.pName] = {
                pName: item.pName,
                category: item.category,
                sizes: [] // 用於儲存尺寸與價格
            };
        }

        // 將尺寸與價格加入對應的產品中
        grouped[item.pName].sizes.push({
            name: item.size,
            price: item.price,
            pId: item.pId
        });
    });

    // 將物件轉為陣列形式
    return Object.values(grouped);
};

export { DoSelectProduct };