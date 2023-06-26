const footers: string[] = ['会員登録', '運営会社', '利用規約', '個人情報の取扱について', '特定商取引法に基づく表記', 'お問い合わせ']

export default function Footer() {
    return (
        <div className="w-full h-32 bg-header px-40 flex items-center text-white gap-10">
            {footers.map((footerItem: string) => <span className="cursor-pointer" key={footerItem}>{footerItem}</span>)}
        </div>
    )
}