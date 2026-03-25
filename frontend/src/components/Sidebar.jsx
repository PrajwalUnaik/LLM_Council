import './Sidebar.css';

export default function Sidebar({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  isDark,
  onToggleDark,
}) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-row">
          <h1>LLM Council</h1>
          <button
            className="theme-toggle"
            role="switch"
            aria-checked={isDark}
            onClick={onToggleDark}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-toggle-icon sun">☀</span>
            <span className="theme-toggle-icon moon">☾</span>
          </button>
        </div>
        <button className="new-conversation-btn" onClick={onNewConversation}>
          + New Conversation
        </button>
      </div>

      <div className="conversation-list">
        {conversations.length === 0 ? (
          <div className="no-conversations">No conversations yet</div>
        ) : (
          conversations.map((conv) => (
            <div
              key={conv.id}
              className={`conversation-item ${
                conv.id === currentConversationId ? 'active' : ''
              }`}
              onClick={() => onSelectConversation(conv.id)}
            >
              <div className="conversation-title">
                {conv.title || 'New Conversation'}
              </div>
              <div className="conversation-meta">
                {conv.message_count} messages
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
