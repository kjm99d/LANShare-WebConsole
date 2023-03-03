<template>
    <div>
        <h1>FTP Service</h1>
        <div v-if="this.IsLoading === false">
            <p>현재경로 {{ this.current_path }}</p>
            <table-component v-on:append-path="appendPath" :items="items" />
        </div>
        
        <div v-else class="text-center">
            <v-progress-circular :size="50" color="blue" indeterminate />
        </div>
    </div>
</template>
  
<script>
import TableComponent from './TableComponent.vue'
import axios from 'axios'

export default {
    components: {
        'table-component': TableComponent
    },
    mounted() {
        console.log("created !")

        const path = this.StackToPath(this.stack_path)
        this.current_path = path;
        this.GetServerFiles(path)

    },
    watch: {
        // Stack Path Array 변화 관찰
        stack_path(newPathStack) {
            console.log("watch !")

            const path = this.StackToPath(newPathStack)
            this.current_path = path;


            this.GetServerFiles(path)

        }
    },
    methods: {
        appendPath(strDirName) {
            if (strDirName === "..")
                this.stack_path.pop()
            else
                this.stack_path.push(strDirName)
            const path = this.StackToPath(this.stack_path)

            this.current_path = path;

            this.GetServerFiles(path)
        },
        StackToPath(Stack) {
            let path = "";
            Stack.forEach(element => {
                path += element
                path += "\\"
            });

            return path;
        },
        GetServerFiles(dir) {
            this.IsLoading = true;

            const target = "http://localhost:5004/ftp";
            const query = "?path=" + dir
            axios.get(target + query)
                .then((response) => {
                    this.items = response.data.data
                    this.items.unshift({ "is_dir": true, "name": ".." });
                    this.IsLoading = false;
                })
        },
    },
    data() {
        return {
            IsLoading: true,

            current_path: "",
            stack_path: ["C:\\"],
            items: []
        }
    }
}
</script>
  