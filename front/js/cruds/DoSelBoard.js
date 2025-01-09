function DoSelBoard() {
    let data = {
        sel_table: 'board',
    };

    try {
        const response = axios.post('../../server/index.php?action=DoSelect', Qs.stringify(data));
        return response;
        
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export { DoSelBoard };