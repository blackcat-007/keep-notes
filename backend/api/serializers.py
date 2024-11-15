from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["id","username","password"]#takes all data which are necesarry to create a user
        extra_kwargs={"password":{"write_only":True}}#to inform django that it will take password but we dont want to return the password none can read the password 
    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)# it will create the new version of the user by the validated data given by user and checked by serializer
        return user
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Note
        fields=["id","title","content","created_at","author"]
        extra_kwargs={"author": {"read_only":True}}
        
