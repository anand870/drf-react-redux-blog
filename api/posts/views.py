from rest_framework import viewsets,serializers,mixins,filters
from django_filters.rest_framework import DjangoFilterBackend
import django_filters
from app_models.posts import Post
from app_utils.backends import CountBackend

from .serializers import PostDetailSerializer,PostListSerializer

class PostFilter(django_filters.FilterSet):
    class Meta:
        model = Post
        fields = ['author','category']

class PostViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = Post.objects.filter(published=True)
    filter_class = PostFilter
    filter_backends = (DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter,CountBackend)
    search_fields = ('title',)
    ordering_fields = ('modified_at','slug')
    lookup_field = 'slug'
    serializer_class = {
        'list':PostListSerializer,
        'retrieve':PostDetailSerializer
    }
    def get_serializer_class(self):
        return self.serializer_class[self.action]

    def get_queryset(self):
        if self.action=='retrieve':
            return self.queryset.prefetch_related('category').all()
