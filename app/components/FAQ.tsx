export default function FAQ(){
const faqs=[
["How often should bins be cleaned?","Most customers choose monthly service."],
["Do you sanitize?","Yes. Every cleaning includes sanitizing and deodorizing."],
["Do I need to be home?","No. Just leave your bins at the curb."]
];
return(
<section className="bg-slate-50 py-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-5xl font-extrabold text-slate-900 text-center mb-14">
Frequently Asked Questions
</h2>
{faqs.map(([q,a])=>(
<details
key={q}
className="mb-5 bg-white rounded-xl border border-slate-200 shadow-lg p-6"
>
<summary className="font-bold text-xl text-slate-900 cursor-pointer">
{q}
</summary>
<p className="mt-5 text-slate-700">
{a}
</p>
</details>
))}
</div>
</section>
)
}
