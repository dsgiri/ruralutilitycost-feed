import { SEO } from '../components/SEO';

export function License() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
      <SEO 
        title="License | Feed by Rural Utility Cost" 
        description="Licensing information for the Feed app by Rural Utility Cost." 
      />
      <h1 className="text-3xl font-bold text-slate-text mb-6 tracking-tight">License</h1>
      
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-sm leading-relaxed text-slate-sub space-y-6">
        <p>
          The Rural Utility Cost application ecosystem, including the Feed app, is proprietary software unless otherwise noted in the specific source code repositories.
        </p>

        <h2 className="text-xl font-bold text-slate-text mt-8 mb-3">Copyright</h2>
        <p>
          &copy; {new Date().getFullYear()} Rural Utility Cost. All rights reserved.
        </p>
        <p>
          You may not copy, modify, distribute, sell, or lease any part of our services or included software unless specifically allowed under individual open source repository licenses linked via our GitHub profile.
        </p>

        <h2 className="text-xl font-bold text-slate-text mt-8 mb-3">Third-Party Licenses</h2>
        <p>
          This application utilizes several open source libraries and packages, including React, Tailwind CSS, Lucide Icons, and React Router. Their respective licenses are included with their source distribution and can be requested via our contact page.
        </p>
      </div>
    </div>
  );
}
