class CountBackend(object):
    """ Limits the count of result fetched.Use only at the end of filters.Resets the default pagination to NoPagination """
    def filter_queryset(self,request,queryset,view):
        if hasattr(view,'limit_key'):
            countkey = view.limit_key
        else:
            countkey = 'limit'
        limit = request.query_params.get(countkey,None)
        if limit is None or not str(limit).isdigit():
            if not hasattr(view,'limit') or view.limit==-1:
                return queryset
            else:
                limit=view.limit
        if limit == 0:
            return []
        return queryset[:int(limit)]

