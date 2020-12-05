<template>
    <v-main class="grey lighten-2">
        <v-container>
            <v-row>
                <v-col>
                <v-sheet
                    min-height="60vh"
                    rounded="lg"
                >
                
                    <v-data-table
                        :headers="headers"
                        :items="students"
                        sort-by="calories"
                        class="elevation-1"
                    >
                        <template v-slot:top>
                        <v-toolbar flat >
                            <v-toolbar-title>Consulta de alunos</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-dialog
                                v-model="dialog"
                                max-width="500px"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                                >
                                Cadastrar Aluno
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                <v-container>
                                    <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                        v-model="editedItem.name"
                                        label="Nome"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                        v-model="editedItem.email"
                                        label="E-mail"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                        v-model="editedItem.academicRegister"
                                        label="RA"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                        v-model="editedItem.cpf"
                                        label="CPF"
                                        ></v-text-field>
                                    </v-col>
                                    </v-row>
                                </v-container>
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="close"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="save"
                                >
                                    Save
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title v-if="students[editedIndex]" class="title">Deseja mesmo deletar o aluno {{students[editedIndex].name}}?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
                        </v-toolbar>
                        </template>
                        <template v-slot:item.actions="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                        </template>
                        <template v-slot:no-data>
                        <v-btn
                            color="primary"
                            @click="initialize"
                        >
                            Reset
                        </v-btn>
                        </template>
                    </v-data-table>

                </v-sheet>
                </v-col>
            </v-row>
            
            <v-alert
                type="warning"
                v-show="notImplementedAlert"
                elevation="2"
                colored-border
                dismissible
            >Componente não implementado</v-alert>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data () {
        return {
            notImplementedAlert: false,
            headers: [
                { text: 'Registro acadêmico', value: 'academicRegister' },
                { text: 'Nome', value: 'name' },
                { text: 'CPF', value: 'cpf' },
                { text: 'Ações', value: 'actions', sortable: false },
            ],
            students: [],
            editedIndex: -1,
            editedItem: {
                academicRegister: 0,
                name: '',
                email: '',
                cpf: '',
            },
            defaultItem: {
                academicRegister: 0,
                name: '',
                email: '',
                cpf: '',
            },
            dialog: false,
            dialogDelete: false,
        }
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo cadastro de aluno' : 'Editar dados do aluno'
      },
    },
    
    created () {
      this.initialize()
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    methods: {
        showNotImplementedAlert() {
            this.notImplementedAlert = true
            setTimeout(()=>this.notImplementedAlert = false, 10000)
        },

        initialize () {
            this.students = [
                {
                    academicRegister: 101235,
                    name: 'Paula Souza',
                    email: 'paula.souza@gmail.com',
                    cpf: 12199999999,
                },
                {
                    academicRegister: 111687,
                    name: 'João Silva',
                    email: 'joao.silva@gmail.om',
                    cpf: 12199999999,
                },
                {
                    academicRegister: 111365,
                    name: 'Maurício Souza',
                    email: 'mauricio.souza@gmail.com',
                    cpf: 12199999999,
                },
                {
                    academicRegister: 111343,
                    name: 'Marina Miranda',
                    email: 'marina.miranda@gmail.com',
                    cpf: 12199999999,
                },
            ]
        },

        editItem (item) {
            this.editedIndex = this.students.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.students.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.students.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save () {
            if (this.editedIndex > -1) {
                Object.assign(this.students[this.editedIndex], this.editedItem)
            } else {
                this.students.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>