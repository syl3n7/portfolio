// components/Resume.js

export default function Resume() {
    return (
      <section id="resume" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">R&eacute;sum&eacute;</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-blue-100">
          
          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Skills</h3>
            <ul className="space-y-2 text-blue-900 bg-blue-50 rounded-lg p-6">
              <li>Adobe Creative Suite</li>
              <li>Microsoft Office Suite</li>
              <li>Unity Engine for creating tools and games</li>
              <li>Problem solving</li>
              <li>Programming in C#, .Net, Java, C++</li>
              <li>Installation and configuration of networks</li>
              <li>Installation and configuration of operating systems</li>
              <li>Maintenance and configuration of servers and desktops</li>
            </ul>
          </div>
  
          {/* Work Experience Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Work Experience</h3>
            <div className="space-y-4 bg-indigo-50 rounded-lg p-6">
              <div>
                <h4 className="font-semibold text-blue-900">APPC of Porto - Computer Technical Assistant</h4>
                <p className="text-blue-800">6-month internship</p>
                <ul className="list-disc ml-6 mt-2 text-blue-800">
                  <li>Installation and configuration of operating systems</li>
                  <li>Network installation and configuration</li>
                  <li>Internal network management and access point configuration</li>
                  <li>Hardware and software maintenance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">PT/MEO Contact Center</h4>
                <p className="text-blue-800">2-month &quot;on-job&quot; training period</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">ManPowerGroup - Technical Support for Altice Portugal</h4>
                <p className="text-blue-800">Part-time | April 2018 &ndash; May 2020</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Intelcia - Technical Support for Altice Portugal</h4>
                <p className="text-blue-800">Part-time | May 2020 &ndash; Present</p>
              </div>
            </div>
          </div>
  
          {/* Academic Qualifications Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Academic Qualifications</h3>
            <ul className="space-y-2 text-blue-900 bg-blue-50 rounded-lg p-6">
              <li>Regular education up to the 12th grade</li>
              <li>Technical-professional course of Programming and Management of Computer Systems
                <ul className="ml-6 mt-1 text-blue-800">
                  <li>Level 4 in the European qualifications framework</li>
                  <li>Average performance: 15</li>
                  <li>P.A.P.: 18</li>
                  <li>T.W.C.: 15</li>
                </ul>
              </li>
              <li>Professional photography course [entry level] at ShawAcademy</li>
            </ul>
          </div>
  
          {/* Other Qualifications Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Other Qualifications</h3>
            <ul className="space-y-2 text-blue-900 bg-indigo-50 rounded-lg p-6">
              <li>8 years of experience with Windows operating systems</li>
              <li>6 years of experience in Linux-based operating systems</li>
              <li>2 years of experience in MacOS</li>
            </ul>
          </div>
  
          {/* References Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">References</h3>
            <ul className="space-y-2 text-blue-900 bg-blue-50 rounded-lg p-6">
              <li>APPC Porto &ndash; Pedro Silva &ndash; Internship monitor (2016)</li>
              <li>Gondomar Secondary School &ndash; Carla Cruz &ndash; Accompanying teacher during P.A.P.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }