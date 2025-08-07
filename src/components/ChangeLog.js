import React, { useState, useEffect } from 'react';
import { Checkmark, Time, CircleFilled } from '@carbon/icons-react';

const ChangeLog = ({ component }) => {
  const [changelogData, setChangelogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChangelogData = async () => {
      try {
        const response = await fetch(`/changelogs/${component}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load changelog for ${component}`);
        }
        const data = await response.json();
        setChangelogData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (component) {
      fetchChangelogData();
    }
  }, [component]);

  const renderChangeItem = (change, index) => (
    <li key={index} className="changelog-item">
      <span className={`changelog-type changelog-type--${change.type.toLowerCase()}`}>
        {change.type}
      </span>
      <span className="changelog-description">{change.description}</span>
    </li>
  );

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'functional':
      case 'working':
      case 'implemented':
      case 'available':
        return <Checkmark className="status-icon status-icon--complete" />;
      case 'demonstrated':
      case 'planning':
        return <Time className="status-icon status-icon--planning" />;
      case 'in-development':
        return <CircleFilled className="status-icon status-icon--progress" />;
      default:
        return <Time className="status-icon status-icon--pending" />;
    }
  };

  if (loading) {
    return (
      <div className="changelog-loading">
        <p>Loading changelog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="changelog-error">
        <p>Error loading changelog: {error}</p>
      </div>
    );
  }

  if (!changelogData) {
    return (
      <div className="changelog-error">
        <p>No changelog data available for {component}</p>
      </div>
    );
  }

  return (
    <div className="changelog">
      <style>
        {`
          .changelog {
            margin-top: 2rem;
          }

          .changelog-loading,
          .changelog-error {
            padding: 1rem;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            background: #f4f4f4;
            color: #6f6f6f;
            text-align: center;
          }

          .changelog-error {
            background: #fff5f5;
            border-color: #fecaca;
            color: #991b1b;
          }

          .changelog-section {
            margin-bottom: 2rem;
          }

          .changelog-section h4 {
            margin: 0 0 1rem 0;
            font-size: 1.125rem;
            font-weight: 600;
          }

          .changelog-release {
            margin-bottom: 2rem;
            padding: 1.5rem;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background: white;
          }

          .changelog-release-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid #e0e0e0;
          }

          .changelog-version {
            font-size: 1.25rem;
            font-weight: 600;
            color: #161616;
          }

          .changelog-date {
            font-size: 0.875rem;
            color: #6f6f6f;
          }

          .changelog-status {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 500;
            text-transform: uppercase;
          }

          .changelog-status--in-development {
            background: #fff3cd;
            color: #856404;
          }

          .changelog-status--planned {
            background: #d1ecf1;
            color: #0c5460;
          }

          .changelog-changes {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .changelog-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid #f4f4f4;
          }

          .changelog-item:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
          }

          .changelog-type {
            flex-shrink: 0;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
          }

          .changelog-type--new {
            background: #d4edda;
            color: #155724;
          }

          .changelog-type--enhanced {
            background: #d1ecf1;
            color: #0c5460;
          }

          .changelog-type--updated {
            background: #fff3cd;
            color: #856404;
          }

          .changelog-description {
            flex: 1;
            font-size: 0.875rem;
            line-height: 1.5;
            color: #161616;
          }

          .changelog-notes {
            margin-top: 1rem;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 4px;
            font-size: 0.875rem;
            color: #6f6f6f;
            font-style: italic;
          }

          .implementation-status {
            margin-top: 2rem;
          }

          .status-grid {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 0.75rem;
            align-items: center;
          }

          .status-item {
            display: contents;
          }

          .status-feature {
            font-size: 0.875rem;
            color: #161616;
          }

          .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.25rem 0.5rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 500;
          }

          .status-badge--functional,
          .status-badge--working,
          .status-badge--implemented,
          .status-badge--available {
            background: #d4edda;
            color: #155724;
          }

          .status-badge--demonstrated,
          .status-badge--planning {
            background: #fff3cd;
            color: #856404;
          }

          .status-icon {
            width: 12px;
            height: 12px;
          }

          .status-icon--complete {
            fill: #155724;
          }

          .status-icon--planning {
            fill: #856404;
          }

          .status-icon--progress {
            fill: #0c5460;
          }

          .status-icon--pending {
            fill: #6f6f6f;
          }

          @media (max-width: 768px) {
            .changelog-release-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.5rem;
            }

            .status-grid {
              grid-template-columns: 1fr;
              gap: 0.5rem;
            }

            .status-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.5rem 0;
              border-bottom: 1px solid #f4f4f4;
            }

            .status-item:last-child {
              border-bottom: none;
            }
          }
        `}
      </style>

      {/* Current Releases */}
      {changelogData.releases && changelogData.releases.length > 0 && (
        <div className="changelog-section">
          {changelogData.releases.map((release, index) => (
            <div key={index} className="changelog-release">
              <div className="changelog-release-header">
                <div>
                  <div className="changelog-version">Version {release.version}</div>
                  {release.date && <div className="changelog-date">{release.date}</div>}
                </div>
                <div className={`changelog-status changelog-status--${release.status}`}>
                  {renderStatusIcon(release.status)}
                  {release.status}
                </div>
              </div>

              <ul className="changelog-changes">
                {release.changes.map((change, changeIndex) =>
                  renderChangeItem(change, changeIndex)
                )}
              </ul>

              {release.notes && (
                <div className="changelog-notes">{release.notes}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Planned Future Releases */}
      {changelogData.plannedReleases && changelogData.plannedReleases.length > 0 && (
        <div className="changelog-section">
          <h4>Planned Future Releases</h4>
          {changelogData.plannedReleases.map((release, index) => (
            <div key={index} className="changelog-release">
              <div className="changelog-release-header">
                <div className="changelog-version">Version {release.version}</div>
                <div className={`changelog-status changelog-status--${release.status}`}>
                  {renderStatusIcon(release.status)}
                  {release.status}
                </div>
              </div>

              <ul className="changelog-changes">
                {release.changes.map((change, changeIndex) =>
                  renderChangeItem(change, changeIndex)
                )}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Implementation Status */}
      {changelogData.implementationStatus && changelogData.implementationStatus.length > 0 && (
        <div className="changelog-section implementation-status">
          <h4>Implementation Status</h4>
          <div className="status-grid">
            {changelogData.implementationStatus.map((item, index) => (
              <div key={index} className="status-item">
                <div className="status-feature">{item.feature}</div>
                <div className={`status-badge status-badge--${item.status}`}>
                  {renderStatusIcon(item.status)}
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLog;