export default function WhyChooseUs() {
const items = [
["🛡️","Veteran Owned","Integrity and dependable service."],
["🔥","200° Hot Water","Kills bacteria and removes grime."],
["♻️","Eco Friendly","Wastewater responsibly contained."],
["⭐","Reliable","Always on time with professional service."]
];
return (
<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-5xl font-extrabold text-slate-900">
Why Choose Volunteer State Bin Cleaners?
</h2>
<p className="text-xl text-slate-700 mt-6">
Professional bin cleaning with service you can trust.
</p>
</div>
<div className="grid md:grid-cols-4 gap-8">
{items.map(([icon,title,text])=>(
<div
key={title}
className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8"
>
<div className="text-5xl mb-5">{icon}</div>
<h3 className="text-2xl font-bold text-slate-900">
{title}
</h3>
<p className="mt-4 text-slate-700 leading-7">
{text}
</p>
</div>
))}
</div>
</div>
</section>
);
}
