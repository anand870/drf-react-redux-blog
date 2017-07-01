from django.contrib import admin
from .posts import Post,Author,Category,PostImage

class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}

class AuthorAdmin(admin.ModelAdmin):
    pass

class CategoryAdmin(admin.ModelAdmin):
    pass

class PostImageAdmin(admin.ModelAdmin):
    pass

admin.site.register(Post,PostAdmin)
admin.site.register(Author,AuthorAdmin)
admin.site.register(Category,CategoryAdmin)
admin.site.register(PostImage,PostImageAdmin)
