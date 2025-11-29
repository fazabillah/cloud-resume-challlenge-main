function EmptyState({
  icon = 'fas fa-search',
  message = 'No results found',
  suggestion = 'Try adjusting your filters',
  onClearFilters
}) {
  return (
    <div className="empty-state">
      <i className={icon}></i>
      <h4>{message}</h4>
      <p className="text-muted">{suggestion}</p>
      {onClearFilters && (
        <button
          className="btn btn-primary"
          onClick={onClearFilters}
        >
          <i className="fas fa-redo mr-2"></i> Clear filters
        </button>
      )}
    </div>
  )
}

export default EmptyState
