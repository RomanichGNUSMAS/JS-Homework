#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

typedef enum {
	JS_UNDEFINED,
	JS_INTEGER,
	JS_FLOAT,
	JS_BOOLEAN,
	JS_STRING
}JSType;

typedef struct JSValue {
	JSType type;
	union {
		long long int number;
		double fnumber;
		bool boolean;
		char* string;
	}as;
}JSValue;

typedef struct JSProperty {
	JSValue value;
}JSProperty;

typedef struct HiddenClass {
	char** keys;
	int* offsets;
	int size;
}HiddenClass;

typedef struct JSObject {
	HiddenClass* shape;
	JSProperty* slots;
	int size;
}JSObject;

HiddenClass* HiddenClass_new();
HiddenClass* transition(HiddenClass*, char*);
int HiddenClass_get_offset(HiddenClass*, const char*);
JSObject* JSObject_new();
void getInfo(JSObject*);
bool init_boolean(char* val) {
	bool res = !strcmp(val, "true") ? true : false;
	return res;
}

void JSObject_set_property(JSObject* obj, char* key, JSValue value) {
	HiddenClass* new_shape = transition(obj->shape, key);
	int new_size = new_shape->size;

	int old_size = obj->size;

	obj->slots = (JSProperty*)realloc(obj->slots, sizeof(JSProperty) * new_size);
	if (!obj->slots) {
		perror("realloc");
		exit(EXIT_FAILURE);
	}
	obj->slots[old_size].value = value;
	obj->size = new_size;
	obj->shape = new_shape;
}
JSValue JSObject_get_property(JSObject* obj,char* key){
	HiddenClass* new_obj = obj->shape;

	int index = HiddenClass_get_offset(new_obj, key);
	if (index == -1) {
		JSValue undefined_val;
		undefined_val.type = JS_UNDEFINED;
		return undefined_val;
	}

	return obj->slots[index].value;
}

int HiddenClass_get_offset(HiddenClass* obj,const char*key){
	for (int i = 0; i < obj->size; ++i) {
		if (!strcmp(obj->keys[i],key)) {
			return i;
		}
	}
	return -1;
}

HiddenClass* HiddenClass_new() {
	HiddenClass* hc = (HiddenClass*)malloc(sizeof(HiddenClass));
	if (!hc) exit(EXIT_FAILURE);

	hc->keys = NULL;
	hc->offsets = NULL;
	hc->size = 0;
	return hc;
}

HiddenClass* transition(HiddenClass* old_shape, char* new_key) {
	const int old_size = old_shape->size;
	const int new_size = old_shape->size + 1;
	HiddenClass* new_shape = HiddenClass_new();
	new_shape->keys = (char**)realloc(NULL, sizeof(char*) * new_size);
	new_shape->offsets = (int*)realloc(NULL, sizeof(int) * new_size);
	if (old_size > 0) {
		memcpy(new_shape->keys, old_shape->keys, sizeof(char*) * old_size);
		memcpy(new_shape->offsets, old_shape->offsets, sizeof(int) * old_size);
	}
	int new_offset = old_size;
	new_shape->keys[old_size] = strdup(new_key);
	new_shape->offsets[old_size] = new_offset;
	new_shape->size = new_size;
	return new_shape;
}

JSObject* JSObject_new() {
	JSObject* obj = (JSObject*)malloc(sizeof(JSObject));
	if (!obj) exit(EXIT_FAILURE);
	obj->shape = HiddenClass_new();
	obj->slots = NULL;
	obj->size = 0;
	return obj;
}

void getInfo(JSObject* obj) {
	for (int i = 0; i < obj->size; ++i) {
		switch (obj->slots[i].value.type) {
		case JS_INTEGER:
			printf("%s:%d\n", obj->shape->keys[i], obj->slots[i].value.as.number);
			break;
		case JS_STRING:
			printf("%s:%s\n", obj->shape->keys[i], obj->slots[i].value.as.string);
			break;
		case JS_FLOAT:
			printf("%s:%.2lf\n", obj->shape->keys[i], obj->slots[i].value.as.fnumber);
			break;
		case JS_BOOLEAN:
			printf("%s:%s\n", obj->shape->keys[i], obj->slots[i].value.as.boolean ? "true" : "false");
			break;
		}
	}
}

int main() {
	JSObject* object = JSObject_new();
	JSValue* value = (JSValue*)malloc(sizeof(JSValue) * 3);


	value[0].type = JS_STRING;
	value[0].as.string = "Roman";

	value[1].type = JS_FLOAT;
	value[1].as.fnumber = 15.5;

	value[2].type = JS_BOOLEAN;
	value[2].as.boolean = false;
	JSObject_set_property(object, "name", value[0]);
	JSObject_set_property(object, "age", value[1]);
	JSObject_set_property(object, "is under 16", value[2]);
	getInfo(object);
	free(value);
	free(object);
}