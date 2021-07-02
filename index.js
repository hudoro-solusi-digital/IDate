export default function IDate(date){
    if(!date){
        throw new Error("harus mengirimkan hari! (range 0-6)");
    } else if (typeof date !== "number"){
        throw new TypeError("range 0-6 harus berupa angka");
    } else if (date < 0 || date > 6){
        throw new Error("range hari tidak sesuai! (range 0-6)");
    }

    const IndonesianDays = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu',
    ];

    return IndonesianDays[date];
}