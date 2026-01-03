/**
 * Tính số năm kinh nghiệm từ ngày bắt đầu làm việc đến hiện tại
 * @param startDate - Ngày bắt đầu làm việc (format: DD/MM/YYYY)
 * @returns Số năm kinh nghiệm (làm tròn đến 1 chữ số thập phân)
 */
export const calculateYearsOfExperience = (startDate: string = '16/10/2023'): number => {
    // Parse ngày bắt đầu (format: DD/MM/YYYY)
    const [day, month, year] = startDate.split('/').map(Number);
    const start = new Date(year, month - 1, day);
    
    // Ngày hiện tại
    const now = new Date();
    
    // Tính số milliseconds
    const diffTime = now.getTime() - start.getTime();
    
    // Chuyển đổi sang năm (365.25 ngày/năm để tính cả năm nhuận)
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    
    // Làm tròn đến 1 chữ số thập phân
    return Math.round(diffYears * 10) / 10;
};

/**
 * Lấy số năm kinh nghiệm từ ngày bắt đầu làm việc đầu tiên (16/10/2023)
 * @returns Số năm kinh nghiệm (số nguyên)
 */
export const getYearsOfExperience = (): number => {
    return Math.floor(calculateYearsOfExperience('16/10/2023'));
};

