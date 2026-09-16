export function ImpactStats() {
  const stats = [
    {
      value: "1+",
      title: "Production Apps",
      subtitle: "Shipped to real users",
    },
    {
      value: "2",
      title: "AI Bots Built",
      subtitle: "Text + Voice support",
    },
    {
      value: "2",
      title: "Cloud Deployments",
      subtitle: "Live on Render",
    },
    {
      value: "10+",
      title: "Ad Platforms",
      subtitle: "Cross-device targeting",
    },
    {
      value: "Real-Time",
      title: "Systems Built",
      subtitle: "Firebase & live dispatch",
    },
  ];

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="divider mb-12" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.title} className="stat-card">
              <div className="impact-number">{stat.value}</div>

              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#cbd5e1",
                  marginTop: "10px",
                  marginBottom: "4px",
                }}
              >
                {stat.title}
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "#475569",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}