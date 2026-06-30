export default function Testimonials(){
const reviews=[
"Excellent service! My trash bins look brand new.",
"Professional, friendly and always on time.",
"Highly recommend Volunteer State Bin Cleaners."
];
return(
<section className="bg-white py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-5xl font-extrabold text-slate-900">
Customer Reviews
</h2>
<p className="text-xl text-slate-700 mt-5">
See why homeowners trust us.
</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
{reviews.map((review,index)=>(
<div
key={index}
className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8"
>
<div className="text-yellow-500 text-2xl mb-4">
★★★★★
</div>
<p className="text-slate-700 text-lg leading-8">
"{review}"
</p>
</div>
))}
</div>
</div>
</section>
)
}
