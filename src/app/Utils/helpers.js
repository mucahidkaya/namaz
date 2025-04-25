export function GetTime(time){
    const vakitler={
        sabah: 'Sabah',
        ogle: 'Öğle',
        ikindi: 'İkindi',
        aksam: 'Akşam',
        yatsi: 'Yatsı'
    }
    if (!vakitler[time]){
        return ''
    }
    return vakitler[time]

}